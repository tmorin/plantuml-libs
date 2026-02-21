# Jitpack


```text
simpleicons-14/J/Jitpack
```

```text
include('simpleicons-14/J/Jitpack')
```



| Illustration | Jitpack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jitpack.png) | ![illustration for Jitpack](../../simpleicons-14/J/Jitpack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JitpackXs>`
- `<$JitpackSm>`
- `<$JitpackMd>`
- `<$JitpackLg>`





## Jitpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jitpack
include('simpleicons-14/J/Jitpack')

' renders the element
Jitpack('Jitpack', 'Jitpack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jitpack
include('simpleicons-14/J/Jitpack')

' renders the element
Jitpack('Jitpack', 'Jitpack', 'an optional tech label', 'an optional description')
@enduml
```

