# PlantUML Libs

## Packages

The library provides {{= it.config.packages.length }} packages.

{{ for (package of it.config.packages) { }}
- [{{= package }}]({{= package }}/README.md){{ } }}

## Include the library

Include remotely the library:
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="{{= it.config.remoteUrl }}/{{= it.config.libDir }}"

' loads the library
!include $LIB_BASE_LOCATION/library.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="<the relative path to the /public directory>"

' loads the library
!include $LIB_BASE_LOCATION/library.puml
@enduml
```

## include vs !include

When documenting large projects, it often a good practice to define the components in separate `.puml` files which are then included in others containing the diagrams to render.
So that, the definition of the components can be re-used over the diagram.
Moreover, the diagrams which include them are automatically updated.

However, be careful about relative and absolute paths with `!include` vs `include()`.
According to where you are (separate files vs diagram files), the _relative paths_ won't be resolve from the _current directory_.

Given the following file tree, the following snippets should help you to configure files properly.

- project/
- project/reference/c4.puml
- project/reference/aws.puml
- project/src/guidebook/component/c4.puml
- project/src/guidebook/component/aws.puml

### project/reference/c4.puml
```plantuml
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../node_modules/@tmorin/plantuml-libs/dist"
!include $LIB_BASE_LOCATION/bootstrap.puml
include('c4model/bootstrap')
' definition of the common elements below
' .....
```

### project/reference/aws.puml
```plantuml
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../node_modules/@tmorin/plantuml-libs/dist"
!include $LIB_BASE_LOCATION/bootstrap.puml
include('aws-20200911/bootstrap')
' definition of the common elements below
' .....
```

### project/src/guidebook/component/c4.puml
```plantuml
@startuml level1-system
!include ../../../references/c4.puml
!global $IMAGE_BASE_PATH="../../" + $LIB_BASE_LOCATION + "/"
!global $LIB_BASE_LOCATION="../../" + $LIB_BASE_LOCATION
' description of the diagram below
' .....
@enduml
```

### project/src/guidebook/component/aws.puml
```plantuml
@startuml infrastructure-production
!include ../../../references/aws.puml
!global $IMAGE_BASE_PATH="../../" + $LIB_BASE_LOCATION + "/"
!global $LIB_BASE_LOCATION="../../" + $LIB_BASE_LOCATION
' description of the diagram below
' .....
@enduml
```

## Load element provided by packages

```plantuml
' loads the AwsDataExchange element from the aws-20200911 package
include('aws-20200911/Service/Analytics/AwsDataExchange')
```

## Title

The title of the diagram can be formatted using the procedure:
```plantuml
Title("the title of the diagram", "an optional subtitle", "an optioanl version", "an optional date")
```

## Relationship

The relationships' texts between the diagram's items can be formatted using the procedure:
```plantuml
Relationship("an expected reason of the relationship", "an optional technology")
```
