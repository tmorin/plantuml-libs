# Smoothcomp


```text
simpleicons/S/Smoothcomp
```

```text
include('simpleicons/S/Smoothcomp')
```



| Illustration | Smoothcomp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Smoothcomp.png) | ![illustration for Smoothcomp](../../simpleicons/S/Smoothcomp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmoothcompXs>`
- `<$SmoothcompSm>`
- `<$SmoothcompMd>`
- `<$SmoothcompLg>`





## Smoothcomp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Smoothcomp
include('simpleicons/S/Smoothcomp')

' renders the element
Smoothcomp('Smoothcomp', 'Smoothcomp', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Smoothcomp
include('simpleicons/S/Smoothcomp')

' renders the element
Smoothcomp('Smoothcomp', 'Smoothcomp', 'an optional tech label', 'an optional description')
@enduml
```

