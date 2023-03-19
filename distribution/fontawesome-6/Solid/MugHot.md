# MugHot


```text
fontawesome-6/Solid/MugHot
```

```text
include('fontawesome-6/Solid/MugHot')
```



| Illustration | MugHot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MugHot.png) | ![illustration for MugHot](../../fontawesome-6/Solid/MugHot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MugHotXs>`
- `<$MugHotSm>`
- `<$MugHotMd>`
- `<$MugHotLg>`





## MugHot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MugHot
include('fontawesome-6/Solid/MugHot')

' renders the element
MugHot('MugHot', 'Mug Hot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MugHot
include('fontawesome-6/Solid/MugHot')

' renders the element
MugHot('MugHot', 'Mug Hot', 'an optional tech label', 'an optional description')
@enduml
```

