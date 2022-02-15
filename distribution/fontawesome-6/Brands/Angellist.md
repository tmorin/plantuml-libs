# Angellist


```text
fontawesome-6/Brands/Angellist
```

```text
include('fontawesome-6/Brands/Angellist')
```



| Illustration | Angellist |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Angellist.png) | ![illustration for Angellist](../../fontawesome-6/Brands/Angellist.Local.png) |




## Angellist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Angellist
include('fontawesome-6/Brands/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label')
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

' loads the Item which embeds the element Angellist
include('fontawesome-6/Brands/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label')
@enduml
```

