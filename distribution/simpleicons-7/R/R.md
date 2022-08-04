# R


```text
simpleicons-7/R/R
```

```text
include('simpleicons-7/R/R')
```



| Illustration | R |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/R.png) | ![illustration for R](../../simpleicons-7/R/R.Local.png) |




## R

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element R
include('simpleicons-7/R/R')

' renders the element
R('R', 'R', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element R
include('simpleicons-7/R/R')

' renders the element
R('R', 'R', 'an optional tech label', 'an optional description')
@enduml
```

