# Sparkfun


```text
simpleicons-14/S/Sparkfun
```

```text
include('simpleicons-14/S/Sparkfun')
```



| Illustration | Sparkfun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sparkfun.png) | ![illustration for Sparkfun](../../simpleicons-14/S/Sparkfun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SparkfunXs>`
- `<$SparkfunSm>`
- `<$SparkfunMd>`
- `<$SparkfunLg>`





## Sparkfun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sparkfun
include('simpleicons-14/S/Sparkfun')

' renders the element
Sparkfun('Sparkfun', 'Sparkfun', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sparkfun
include('simpleicons-14/S/Sparkfun')

' renders the element
Sparkfun('Sparkfun', 'Sparkfun', 'an optional tech label', 'an optional description')
@enduml
```

