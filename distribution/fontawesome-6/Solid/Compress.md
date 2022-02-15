# Compress


```text
fontawesome-6/Solid/Compress
```

```text
include('fontawesome-6/Solid/Compress')
```



| Illustration | Compress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Compress.png) | ![illustration for Compress](../../fontawesome-6/Solid/Compress.Local.png) |




## Compress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Compress
include('fontawesome-6/Solid/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Compress
include('fontawesome-6/Solid/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label')
@enduml
```

