# AlignLeft


```text
fontawesome-6/Solid/AlignLeft
```

```text
include('fontawesome-6/Solid/AlignLeft')
```



| Illustration | AlignLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AlignLeft.png) | ![illustration for AlignLeft](../../fontawesome-6/Solid/AlignLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlignLeftXs>`
- `<$AlignLeftSm>`
- `<$AlignLeftMd>`
- `<$AlignLeftLg>`





## AlignLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AlignLeft
include('fontawesome-6/Solid/AlignLeft')

' renders the element
AlignLeft('AlignLeft', 'Align Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlignLeft
include('fontawesome-6/Solid/AlignLeft')

' renders the element
AlignLeft('AlignLeft', 'Align Left', 'an optional tech label', 'an optional description')
@enduml
```

