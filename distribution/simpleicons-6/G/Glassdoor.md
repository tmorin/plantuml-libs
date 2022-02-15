# Glassdoor


```text
simpleicons-6/G/Glassdoor
```

```text
include('simpleicons-6/G/Glassdoor')
```



| Illustration | Glassdoor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Glassdoor.png) | ![illustration for Glassdoor](../../simpleicons-6/G/Glassdoor.Local.png) |




## Glassdoor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Glassdoor
include('simpleicons-6/G/Glassdoor')

' renders the element
Glassdoor('Glassdoor', 'Glassdoor', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Glassdoor
include('simpleicons-6/G/Glassdoor')

' renders the element
Glassdoor('Glassdoor', 'Glassdoor', 'an optional tech label')
@enduml
```

