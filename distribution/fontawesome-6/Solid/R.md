# R


```text
fontawesome-6/Solid/R
```

```text
include('fontawesome-6/Solid/R')
```



| Illustration | R |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/R.png) | ![illustration for R](../../fontawesome-6/Solid/R.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RXs>`
- `<$RSm>`
- `<$RMd>`
- `<$RLg>`





## R

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element R
include('fontawesome-6/Solid/R')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element R
include('fontawesome-6/Solid/R')

' renders the element
R('R', 'R', 'an optional tech label', 'an optional description')
@enduml
```

