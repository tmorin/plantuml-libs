# AlignRight


```text
fontawesome/Solid/AlignRight
```

```text
include('fontawesome/Solid/AlignRight')
```



| Illustration | AlignRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AlignRight.png) | ![illustration for AlignRight](../../fontawesome/Solid/AlignRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlignRightXs>`
- `<$AlignRightSm>`
- `<$AlignRightMd>`
- `<$AlignRightLg>`





## AlignRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AlignRight
include('fontawesome/Solid/AlignRight')

' renders the element
AlignRight('AlignRight', 'Align Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlignRight
include('fontawesome/Solid/AlignRight')

' renders the element
AlignRight('AlignRight', 'Align Right', 'an optional tech label', 'an optional description')
@enduml
```

