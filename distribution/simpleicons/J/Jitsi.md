# Jitsi


```text
simpleicons/J/Jitsi
```

```text
include('simpleicons/J/Jitsi')
```



| Illustration | Jitsi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jitsi.png) | ![illustration for Jitsi](../../simpleicons/J/Jitsi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JitsiXs>`
- `<$JitsiSm>`
- `<$JitsiMd>`
- `<$JitsiLg>`





## Jitsi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jitsi
include('simpleicons/J/Jitsi')

' renders the element
Jitsi('Jitsi', 'Jitsi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jitsi
include('simpleicons/J/Jitsi')

' renders the element
Jitsi('Jitsi', 'Jitsi', 'an optional tech label', 'an optional description')
@enduml
```

