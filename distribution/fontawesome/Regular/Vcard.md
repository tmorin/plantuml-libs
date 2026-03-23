# Vcard


```text
fontawesome/Regular/Vcard
```

```text
include('fontawesome/Regular/Vcard')
```



| Illustration | Vcard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Vcard.png) | ![illustration for Vcard](../../fontawesome/Regular/Vcard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VcardXs>`
- `<$VcardSm>`
- `<$VcardMd>`
- `<$VcardLg>`





## Vcard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Vcard
include('fontawesome/Regular/Vcard')

' renders the element
Vcard('Vcard', 'Vcard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vcard
include('fontawesome/Regular/Vcard')

' renders the element
Vcard('Vcard', 'Vcard', 'an optional tech label', 'an optional description')
@enduml
```

