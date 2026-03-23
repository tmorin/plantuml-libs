# HeadphonesAlt


```text
fontawesome/Regular/HeadphonesAlt
```

```text
include('fontawesome/Regular/HeadphonesAlt')
```



| Illustration | HeadphonesAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HeadphonesAlt.png) | ![illustration for HeadphonesAlt](../../fontawesome/Regular/HeadphonesAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadphonesAltXs>`
- `<$HeadphonesAltSm>`
- `<$HeadphonesAltMd>`
- `<$HeadphonesAltLg>`





## HeadphonesAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeadphonesAlt
include('fontawesome/Regular/HeadphonesAlt')

' renders the element
HeadphonesAlt('HeadphonesAlt', 'Headphones Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeadphonesAlt
include('fontawesome/Regular/HeadphonesAlt')

' renders the element
HeadphonesAlt('HeadphonesAlt', 'Headphones Alt', 'an optional tech label', 'an optional description')
@enduml
```

