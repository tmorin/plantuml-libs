# IdCardClip


```text
fontawesome-6/Solid/IdCardClip
```

```text
include('fontawesome-6/Solid/IdCardClip')
```



| Illustration | IdCardClip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/IdCardClip.png) | ![illustration for IdCardClip](../../fontawesome-6/Solid/IdCardClip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IdCardClipXs>`
- `<$IdCardClipSm>`
- `<$IdCardClipMd>`
- `<$IdCardClipLg>`





## IdCardClip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element IdCardClip
include('fontawesome-6/Solid/IdCardClip')

' renders the element
IdCardClip('IdCardClip', 'Id Card Clip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element IdCardClip
include('fontawesome-6/Solid/IdCardClip')

' renders the element
IdCardClip('IdCardClip', 'Id Card Clip', 'an optional tech label', 'an optional description')
@enduml
```

