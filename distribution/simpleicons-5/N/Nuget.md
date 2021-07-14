# Nuget


```text
simpleicons-5/N/Nuget
```

```text
include('simpleicons-5/N/Nuget')
```



| Illustration | Nuget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nuget.png) | ![illustration for Nuget](../../simpleicons-5/N/Nuget.Local.png) |




## Nuget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nuget
include('simpleicons-5/N/Nuget')

' renders the element
Nuget('Nuget', 'Nuget', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nuget
include('simpleicons-5/N/Nuget')

' renders the element
Nuget('Nuget', 'Nuget', 'an optional tech label')
@enduml
```

