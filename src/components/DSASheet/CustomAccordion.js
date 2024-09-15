import React, { useState } from 'react';
import { youtubeImage, gfgImage } from '../ImageLinks';
import { initialDSASheet } from './DsaSheetData';
import './CustomAccordion.css';

export default function CustomAccordion() {
	const [dsaSheet, setDsaSheet] = useState(initialDSASheet);

	// Function to toggle the status when checkbox is clicked
	const handleStatusChange = (mainIndex, subIndex, questionId) => {
		const updatedDSASheet = [...dsaSheet];
		const question = updatedDSASheet[mainIndex].subTopics[subIndex].questions.find(q => q.id === questionId);

		if (question) {
			question.status = question.status === "Completed" ? "Pending" : "Completed";
			setDsaSheet(updatedDSASheet); // Update the state
		}
	};

	// Function to apply color based on difficulty level
	const getDifficultyColor = (difficulty) => {
		switch (difficulty.toLowerCase()) {
			case 'easy':
				return 'green';
			case 'medium':
				return 'orange';
			case 'hard':
				return 'red';
			default:
				return 'black';
		}
	};

	return (
		<div className="accordion-container">
			<div className="accordion" id="accordionFlushExample">
				{dsaSheet.map((mainTopic, mainIndex) => (
					<div className="accordion-item accordion-item-border" key={mainIndex}>
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#mainTopic${mainIndex}`}
								aria-expanded="false"
								aria-controls={`mainTopic${mainIndex}`}
							>
								{mainTopic.mainTopic}
							</button>
						</h2>
						<div
							id={`mainTopic${mainIndex}`}
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample"
						>
							<div className="accordion-body">
								{/* Nested Subtopics Accordion */}
								<div className="accordion" id={`subAccordion${mainIndex}`}>
									{mainTopic.subTopics.map((subTopic, subIndex) => (
										<div className="accordion-item accordion-item-border" key={subIndex}>
											<h2 className="accordion-header">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target={`#subTopic${mainIndex}${subIndex}`}
													aria-expanded="false"
													aria-controls={`subTopic${mainIndex}${subIndex}`}
												>
													{subTopic.subTopic}
												</button>
											</h2>
											<div
												id={`subTopic${mainIndex}${subIndex}`}
												className="accordion-collapse collapse"
												data-bs-parent={`#subAccordion${mainIndex}`}
											>
												<div className="accordion-body">
													{/* Table for questions */}
													<table className="table table-bordered custom-table">
														<thead>
															<tr>
																<th className="status-column">Status</th>
																<th className="problem-column">Problem</th>
																<th className="icon-column">Youtube</th>
																<th className="icon-column">Practice</th>
																<th>Difficulty</th>
															</tr>
														</thead>
														<tbody>
															{subTopic.questions.map((question) => (
																<tr key={question.id}>
																	<td className="status-column">
																		<input
																			type="checkbox"
																			checked={question.status === "Completed"}
																			onChange={() => handleStatusChange(mainIndex, subIndex, question.id)}
																		/>{' '}
																	</td>
																	<td className="problem-column">{question.title}</td>
																	<td className="icon-column">
																		<a href={question.youtube} target="_blank" rel="noopener noreferrer">
																			<img src={youtubeImage} alt="Youtube" width="24" />
																		</a>
																	</td>
																	<td className="icon-column">
																		<a href={question.practice} target="_blank" rel="noopener noreferrer">
																			<img src={gfgImage} alt="Practice" width="24" />
																		</a>
																	</td>
																	<td style={{ color: getDifficultyColor(question.difficulty) }}>
																		{question.difficulty}
																	</td>
																</tr>
															))}
														</tbody>
													</table>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
