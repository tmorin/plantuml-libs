# AlignJustify


```text
fontawesome/Solid/AlignJustify
```

```text
include('fontawesome/Solid/AlignJustify')
```



| Illustration | AlignJustify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AlignJustify.png) | ![illustration for AlignJustify](../../fontawesome/Solid/AlignJustify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlignJustifyXs>`
- `<$AlignJustifySm>`
- `<$AlignJustifyMd>`
- `<$AlignJustifyLg>`





## AlignJustify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AlignJustify
include('fontawesome/Solid/AlignJustify')

' renders the element
AlignJustify('AlignJustify', 'Align Justify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlignJustify
include('fontawesome/Solid/AlignJustify')

' renders the element
AlignJustify('AlignJustify', 'Align Justify', 'an optional tech label', 'an optional description')
@enduml
```

