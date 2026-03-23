# XmarkCircle


```text
fontawesome/Regular/XmarkCircle
```

```text
include('fontawesome/Regular/XmarkCircle')
```



| Illustration | XmarkCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/XmarkCircle.png) | ![illustration for XmarkCircle](../../fontawesome/Regular/XmarkCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XmarkCircleXs>`
- `<$XmarkCircleSm>`
- `<$XmarkCircleMd>`
- `<$XmarkCircleLg>`





## XmarkCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element XmarkCircle
include('fontawesome/Regular/XmarkCircle')

' renders the element
XmarkCircle('XmarkCircle', 'Xmark Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element XmarkCircle
include('fontawesome/Regular/XmarkCircle')

' renders the element
XmarkCircle('XmarkCircle', 'Xmark Circle', 'an optional tech label', 'an optional description')
@enduml
```

