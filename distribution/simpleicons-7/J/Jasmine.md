# Jasmine


```text
simpleicons-7/J/Jasmine
```

```text
include('simpleicons-7/J/Jasmine')
```



| Illustration | Jasmine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jasmine.png) | ![illustration for Jasmine](../../simpleicons-7/J/Jasmine.Local.png) |




## Jasmine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jasmine
include('simpleicons-7/J/Jasmine')

' renders the element
Jasmine('Jasmine', 'Jasmine', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jasmine
include('simpleicons-7/J/Jasmine')

' renders the element
Jasmine('Jasmine', 'Jasmine', 'an optional tech label')
@enduml
```

