import React from "react";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import { connect, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";

function WnS({ language }) {
	const translations = usePageLocalization(language, 'wns');
	const ct = usePageLocalization(language, 'common');
	const downloadExcel = (fileName) => {
		const link = document.createElement('a');
		link.href = fileName;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	  }
	return <div class="container">
		<div id="layoutSidenav_content">
			<Helmet><title>{translations.helmetTitle}</title> </Helmet>
			<main>
				<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
					<div class="container-fluid">
						<div class="page-header-content">
							<div class="row align-items-center justify-content-between">
								<div class="col-auto">
									<h1 class="page-header-title">
										<div class="page-header-icon"><i data-feather="activity"></i></div>
										{translations.headerContent}
									</h1>

								</div>

							</div>
						</div>
					</div>
				</header>

				<div class="container-fluid mt-n10">
					<div class="col">
						<div class="row">
							<div class="col-xl-6 col-md-6 mb-4 card">
								<div class="card-header">{translations.publicDashboard} <span class="lart1">{translations.lastUpdate}: {showFormattedCurrentDate()}</span></div>
								<div class="row card-body">
									<div class="container">
										<div class="row">
											<div id="accordion" class="width2">
												{/* New Format table is added */}
												<div class="card">
													<div class="card-header">
														<a
															class="card-link text-dark"
															data-toggle="collapse"
															href="#collapseOne"
														>
															<span class="float-right">
																<i class="fa fa-arrow-down"></i>
															</span>
															<h6>{translations.helmetTitle}</h6>
														</a>
													</div>
													<div
														id="collapseOne"
														class="collapse show"
														data-parent="#accordion"
													>
														<div class="card-body">
															<table className="table table-bordered table-striped">
																<thead style={{ backgroundColor: '#F47216', color: 'white' }}>
																	<tr>
																		<th scope="col">{translations.particulars}</th>
																		<th scope="col">{translations.details}</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>{translations.timeLimit}</td>
																		<td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>90 Days</a></td>
																	</tr>
																	<tr>
																		<td>{translations.totalApplication}</td>
																		<td><a href="#" onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>900</a></td>
																	</tr>
																	<tr>
																		<td>{translations.totalApproved}</td>
																		<td><a href="#" onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>800</a></td>
																	</tr>
																	<tr>
																		<td>{translations.avgTime}</td>
																		<td>15 Days</td>
																	</tr>
																	<tr>
																		<td>{translations.medianTime}</td>
																		<td>15 Days</td>
																	</tr>
																	<tr>
																		<td>{translations.minTime}</td>
																		<td>1 Days</td>
																	</tr>
																	<tr>
																		<td>{translations.maxTime}</td>
																		<td>90 Days</td>
																	</tr>
																	<tr>
																		<td>{translations.avgFeeTakenByDept}</td>
																		<td><a href="#" style={{ whiteSpace: 'nowrap' }} onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>₹ 813</a></td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-6 col-md-6 mb-4 card card2">
								<div class="card-header">{translations.infoWns}</div>
								<div class="row card-body">
									<div class="col-md-12">
										<div class="d-flex">

											<ul id="tabs" class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a id="tab-A" href="#pane-A" class="nav-link active" data-toggle="tab" role="tab">{ct.about}</a>
												</li>
												<li class="nav-item">
													<a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">{ct.facilities}</a>
												</li>
												<li class="nav-item">
													<a id="tab-C" href="#pane-C" class="nav-link" data-toggle="tab" role="tab">{ct.listOfDocuments}</a>
												</li>
												<li className="nav-item">
													<a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">{ct.rulesAndRegulations}</a>
												</li>
												<li class="nav-item">
													<a id="tab-d" href="#pane-d" class="nav-link" data-toggle="tab" role="tab">{ct.userManual}</a>
												</li>
												<li class="nav-item">
													<a id="tab-f" href="#pane-f" class="nav-link" data-toggle="tab" role="tab">{ct.procedure}</a>
												</li>




											</ul>

											<div id="content" class="tab-content" role="tablist">
												<div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

													<div class="card-header" role="tab" id="heading-A">
														<h5 class="mb-0">
															<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
																{ct.about}
															</a>
														</h5>
													</div>

													<div id="collapse-A" class="collapse show" role="tabpanel" aria-labelledby="heading-A">

														<div class="flex-grow-1 free-1">
															<p>{translations.waterAndSewerageSystemDescription}</p>
														</div>
													</div>
												</div>


												<div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
													<div class="card-header" role="tab" id="heading-B">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
																{ct.facilities}
															</a>
														</h5>
													</div>
													<div id="collapse-B" class="collapse" role="tabpanel" aria-labelledby="heading-B">
														<div class="flex-grow-1 free-1">
															<p>
																1. {translations.facility1}<br></br>
																2.  {translations.facility2}<br></br>
																3. {translations.facility3} <br></br>
																4.  {translations.facility4}<br></br>
																5.  {translations.facility5}<br></br>
															</p>
														</div>
													</div>

												</div>



												<div id="pane-C" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

													<div class="card-header" role="tab" id="heading-C">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
																{ct.listOfDocuments}
															</a>
														</h5>
													</div>

													<div id="collapse-C" class="collapse" role="tabpanel" aria-labelledby="heading-C">

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">List of Documents required for adding new Connection
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for adding new water or sewerage connection.pdf" class="tooltip"
																	target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for adding new water or sewerage connection.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">List of Documents required for Ownership transfer of Connection.
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for transfer of Water connection.pdf" class="tooltip"
																	target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for transfer of Water connection.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>



													</div>
												</div>


												<div id="pane-d" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

													<div class="card-header" role="tab" id="heading-d">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
																{ct.userManual}
															</a>
														</h5>
													</div>

													<div id="collapse-d" class="collapse" role="tabpanel" aria-labelledby="heading-d">

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">Water & Sewerage User Manual for Citizen

																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_WS_Citizen User Manual_Updated 2.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_WS_Citizen User Manual_July 2024.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">SUJOG FAQ document
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" class="tooltip" target="_blank"><span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>

															</div>
														</div>

													</div>
												</div>

												<div id="pane-e" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">
													<div className="card-header" role="tab" id="heading-e">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
																{ct.rulesAndRegulations}
															</a>
														</h5>
													</div>

													<div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">
														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">1948 H&UD Deptt._Water Rule.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/1948 H&UD Deptt._Water Rule.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/1948 H&UD Deptt._Water Rule.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Odisha State Urban Water Supply Policy-2013.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/Odisha State Urban Water Supply Policy-2013.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/Odisha State Urban Water Supply Policy-2013.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Water Tariff 2026-27.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/WATER_TARIFF_2026_27.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/WATER_TARIFF_2026_27.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Water works rules.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/Water works rules.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/Water works rules.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
																</div>
															</div>
														</div>
													</div>
												</div>

												{/* Procedure Document Start */}
												<div id="pane-f" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-f">
													<div className="card-header" role="tab" id="heading-f">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
																{ct.procedure}
															</a>
														</h5>
													</div>

													<div id="collapse-f" className="collapse" role="tabpanel" aria-labelledby="heading-e">
														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Procedure for Water & Sewerage Connection.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/Procedure for Water & Sewerage Connection 1.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/Procedure for Water & Sewerage Connection 1.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
																</div>
															</div>
														</div>
													</div>
												</div>



											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</main>
		</div>
	</div>
};
const mapStateToProps = (state) => ({
	language: state.localization.language,
});

export default connect(mapStateToProps)(WnS);