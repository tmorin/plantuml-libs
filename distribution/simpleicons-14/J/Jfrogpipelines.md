# Jfrogpipelines


```text
simpleicons-14/J/Jfrogpipelines
```

```text
include('simpleicons-14/J/Jfrogpipelines')
```



| Illustration | Jfrogpipelines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jfrogpipelines.png) | ![illustration for Jfrogpipelines](../../simpleicons-14/J/Jfrogpipelines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JfrogpipelinesXs>`
- `<$JfrogpipelinesSm>`
- `<$JfrogpipelinesMd>`
- `<$JfrogpipelinesLg>`





## Jfrogpipelines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jfrogpipelines
include('simpleicons-14/J/Jfrogpipelines')

' renders the element
Jfrogpipelines('Jfrogpipelines', 'Jfrogpipelines', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jfrogpipelines
include('simpleicons-14/J/Jfrogpipelines')

' renders the element
Jfrogpipelines('Jfrogpipelines', 'Jfrogpipelines', 'an optional tech label', 'an optional description')
@enduml
```

