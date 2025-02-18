# Jitsi


```text
simpleicons-14/J/Jitsi
```

```text
include('simpleicons-14/J/Jitsi')
```



| Illustration | Jitsi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jitsi.png) | ![illustration for Jitsi](../../simpleicons-14/J/Jitsi.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jitsi
include('simpleicons-14/J/Jitsi')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jitsi
include('simpleicons-14/J/Jitsi')

' renders the element
Jitsi('Jitsi', 'Jitsi', 'an optional tech label', 'an optional description')
@enduml
```

