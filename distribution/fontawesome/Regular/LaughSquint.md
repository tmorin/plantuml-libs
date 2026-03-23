# LaughSquint


```text
fontawesome/Regular/LaughSquint
```

```text
include('fontawesome/Regular/LaughSquint')
```



| Illustration | LaughSquint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/LaughSquint.png) | ![illustration for LaughSquint](../../fontawesome/Regular/LaughSquint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaughSquintXs>`
- `<$LaughSquintSm>`
- `<$LaughSquintMd>`
- `<$LaughSquintLg>`





## LaughSquint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaughSquint
include('fontawesome/Regular/LaughSquint')

' renders the element
LaughSquint('LaughSquint', 'Laugh Squint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaughSquint
include('fontawesome/Regular/LaughSquint')

' renders the element
LaughSquint('LaughSquint', 'Laugh Squint', 'an optional tech label', 'an optional description')
@enduml
```

