# Opensourceinitiative


```text
simpleicons-8/O/Opensourceinitiative
```

```text
include('simpleicons-8/O/Opensourceinitiative')
```



| Illustration | Opensourceinitiative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Opensourceinitiative.png) | ![illustration for Opensourceinitiative](../../simpleicons-8/O/Opensourceinitiative.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpensourceinitiativeXs>`
- `<$OpensourceinitiativeSm>`
- `<$OpensourceinitiativeMd>`
- `<$OpensourceinitiativeLg>`





## Opensourceinitiative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opensourceinitiative
include('simpleicons-8/O/Opensourceinitiative')

' renders the element
Opensourceinitiative('Opensourceinitiative', 'Opensourceinitiative', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opensourceinitiative
include('simpleicons-8/O/Opensourceinitiative')

' renders the element
Opensourceinitiative('Opensourceinitiative', 'Opensourceinitiative', 'an optional tech label', 'an optional description')
@enduml
```

