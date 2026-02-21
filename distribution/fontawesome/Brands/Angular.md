# Angular


```text
fontawesome/Brands/Angular
```

```text
include('fontawesome/Brands/Angular')
```



| Illustration | Angular |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Angular.png) | ![illustration for Angular](../../fontawesome/Brands/Angular.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngularXs>`
- `<$AngularSm>`
- `<$AngularMd>`
- `<$AngularLg>`





## Angular

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Angular
include('fontawesome/Brands/Angular')

' renders the element
Angular('Angular', 'Angular', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Angular
include('fontawesome/Brands/Angular')

' renders the element
Angular('Angular', 'Angular', 'an optional tech label', 'an optional description')
@enduml
```

