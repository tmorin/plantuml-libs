# Apacheant


```text
simpleicons-7/A/Apacheant
```

```text
include('simpleicons-7/A/Apacheant')
```



| Illustration | Apacheant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Apacheant.png) | ![illustration for Apacheant](../../simpleicons-7/A/Apacheant.Local.png) |




## Apacheant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apacheant
include('simpleicons-7/A/Apacheant')

' renders the element
Apacheant('Apacheant', 'Apacheant', 'an optional tech label')
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

' loads the Item which embeds the element Apacheant
include('simpleicons-7/A/Apacheant')

' renders the element
Apacheant('Apacheant', 'Apacheant', 'an optional tech label')
@enduml
```

