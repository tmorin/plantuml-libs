# React


```text
fontawesome-5/Brands/React
```

```text
include('fontawesome-5/Brands/React')
```



| Illustration | React |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/React.png) | ![illustration for React](../../fontawesome-5/Brands/React.Local.png) |




## React

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element React
include('fontawesome-5/Brands/React')

' renders the element
React('React', 'React', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element React
include('fontawesome-5/Brands/React')

' renders the element
React('React', 'React', 'an optional tech label')
@enduml
```

