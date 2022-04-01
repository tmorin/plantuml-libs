# BowlRice


```text
fontawesome-6/Solid/BowlRice
```

```text
include('fontawesome-6/Solid/BowlRice')
```



| Illustration | BowlRice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BowlRice.png) | ![illustration for BowlRice](../../fontawesome-6/Solid/BowlRice.Local.png) |




## BowlRice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BowlRice
include('fontawesome-6/Solid/BowlRice')

' renders the element
BowlRice('BowlRice', 'Bowl Rice', 'an optional tech label')
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

' loads the Item which embeds the element BowlRice
include('fontawesome-6/Solid/BowlRice')

' renders the element
BowlRice('BowlRice', 'Bowl Rice', 'an optional tech label')
@enduml
```

