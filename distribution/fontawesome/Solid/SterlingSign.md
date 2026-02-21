# SterlingSign


```text
fontawesome/Solid/SterlingSign
```

```text
include('fontawesome/Solid/SterlingSign')
```



| Illustration | SterlingSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SterlingSign.png) | ![illustration for SterlingSign](../../fontawesome/Solid/SterlingSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SterlingSignXs>`
- `<$SterlingSignSm>`
- `<$SterlingSignMd>`
- `<$SterlingSignLg>`





## SterlingSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SterlingSign
include('fontawesome/Solid/SterlingSign')

' renders the element
SterlingSign('SterlingSign', 'Sterling Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SterlingSign
include('fontawesome/Solid/SterlingSign')

' renders the element
SterlingSign('SterlingSign', 'Sterling Sign', 'an optional tech label', 'an optional description')
@enduml
```

