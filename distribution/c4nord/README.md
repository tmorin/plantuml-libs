# c4nord

## Presentation
This package implements `elements` and `boundaries` coming from the [C4 Model](https://c4model.com) but with the [Nord Theme](https://www.nordtheme.com) flavor.

## Usage

### Bootstrap

The bootstrap may provide PlantUML artifacts like constants, procedures or style statements.

```plantuml
' loads the c4nord bootstrap
include('c4nord/bootstrap')
```

### Full inclusion

An additional include can be used to load all items in one shot.

 ```plantuml
' loads the bootstrap of `c4nord` and all related items
include('c4nord/full')
```

### Single inclusion

Finally, another include can be used to load the library's bootstrap, the package's bootstrap and all items' resources in one `!include` statement.

Include remotely the resources:
```plantuml
' loads the library, the bootstrap of `c4nord` and all related items
!include https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution/c4nord/single.puml
```

Include locally the resources:
```plantuml
' configures the library
!global $INCLUSION_MODE="local"
' loads the library, the bootstrap of `c4nord` and all related items
!include <the relative path to the /distribution directory>/c4nord/single.puml
```




# Modules

The package provides 0 modules.




# Examples

The package provides 7 examples.

## Deployment diagram

![Deployment diagram](../c4nord/deployment_diagram.png)<br>
[The source file.](../c4nord/deployment_diagram.puml)

## Dynamic diagram

![Dynamic diagram](../c4nord/dynamic_diagram.png)<br>
[The source file.](../c4nord/dynamic_diagram.puml)

## Level 1 System Context

![Level 1 System Context](../c4nord/level_1_system_context.png)<br>
[The source file.](../c4nord/level_1_system_context.puml)

## Level 2 Container

![Level 2 Container](../c4nord/level_2_container.png)<br>
[The source file.](../c4nord/level_2_container.puml)

## Level 3 Component

![Level 3 Component](../c4nord/level_3_component.png)<br>
[The source file.](../c4nord/level_3_component.puml)

## System Landscape diagram

![System Landscape diagram](../c4nord/system_landscape_diagram.png)<br>
[The source file.](../c4nord/system_landscape_diagram.puml)

## Main Artifacts

![Main Artifacts](../c4nord/main_artifacts.png)<br>
[The source file.](../c4nord/main_artifacts.puml)



