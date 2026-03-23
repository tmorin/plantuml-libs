# HeadphonesSimple


```text
fontawesome/Regular/HeadphonesSimple
```

```text
include('fontawesome/Regular/HeadphonesSimple')
```



| Illustration | HeadphonesSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HeadphonesSimple.png) | ![illustration for HeadphonesSimple](../../fontawesome/Regular/HeadphonesSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadphonesSimpleXs>`
- `<$HeadphonesSimpleSm>`
- `<$HeadphonesSimpleMd>`
- `<$HeadphonesSimpleLg>`





## HeadphonesSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeadphonesSimple
include('fontawesome/Regular/HeadphonesSimple')

' renders the element
HeadphonesSimple('HeadphonesSimple', 'Headphones Simple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeadphonesSimple
include('fontawesome/Regular/HeadphonesSimple')

' renders the element
HeadphonesSimple('HeadphonesSimple', 'Headphones Simple', 'an optional tech label', 'an optional description')
@enduml
```

