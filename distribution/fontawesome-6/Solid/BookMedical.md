# BookMedical


```text
fontawesome-6/Solid/BookMedical
```

```text
include('fontawesome-6/Solid/BookMedical')
```



| Illustration | BookMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BookMedical.png) | ![illustration for BookMedical](../../fontawesome-6/Solid/BookMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookMedicalXs>`
- `<$BookMedicalSm>`
- `<$BookMedicalMd>`
- `<$BookMedicalLg>`





## BookMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookMedical
include('fontawesome-6/Solid/BookMedical')

' renders the element
BookMedical('BookMedical', 'Book Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookMedical
include('fontawesome-6/Solid/BookMedical')

' renders the element
BookMedical('BookMedical', 'Book Medical', 'an optional tech label', 'an optional description')
@enduml
```

