# Freelancer


```text
simpleicons-8/F/Freelancer
```

```text
include('simpleicons-8/F/Freelancer')
```



| Illustration | Freelancer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Freelancer.png) | ![illustration for Freelancer](../../simpleicons-8/F/Freelancer.Local.png) |




## Freelancer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Freelancer
include('simpleicons-8/F/Freelancer')

' renders the element
Freelancer('Freelancer', 'Freelancer', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Freelancer
include('simpleicons-8/F/Freelancer')

' renders the element
Freelancer('Freelancer', 'Freelancer', 'an optional tech label', 'an optional description')
@enduml
```

