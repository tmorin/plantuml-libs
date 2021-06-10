# HatCowboy


```text
fontawesome-5/Solid/HatCowboy
```

```text
include('fontawesome-5/Solid/HatCowboy')
```



| Illustration | HatCowboy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HatCowboy.png) | ![illustration for HatCowboy](../../fontawesome-5/Solid/HatCowboy.Local.png) |




## HatCowboy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HatCowboy
include('fontawesome-5/Solid/HatCowboy')

' renders the element
HatCowboy('HatCowboy', 'Hat Cowboy', 'an optional tech label')
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

' loads the Item which embeds the element HatCowboy
include('fontawesome-5/Solid/HatCowboy')

' renders the element
HatCowboy('HatCowboy', 'Hat Cowboy', 'an optional tech label')
@enduml
```

