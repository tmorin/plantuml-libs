# Angellist


```text
fontawesome-5/Brands/Angellist
```

```text
include('fontawesome-5/Brands/Angellist')
```



| Illustration | Angellist |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Angellist.png) | ![illustration for Angellist](../../fontawesome-5/Brands/Angellist.Local.png) |




## Angellist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Angellist
include('fontawesome-5/Brands/Angellist')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Angellist
include('fontawesome-5/Brands/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label')
@enduml
```

