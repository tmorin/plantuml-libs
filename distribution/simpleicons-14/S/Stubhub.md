# Stubhub


```text
simpleicons-14/S/Stubhub
```

```text
include('simpleicons-14/S/Stubhub')
```



| Illustration | Stubhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stubhub.png) | ![illustration for Stubhub](../../simpleicons-14/S/Stubhub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StubhubXs>`
- `<$StubhubSm>`
- `<$StubhubMd>`
- `<$StubhubLg>`





## Stubhub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stubhub
include('simpleicons-14/S/Stubhub')

' renders the element
Stubhub('Stubhub', 'Stubhub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stubhub
include('simpleicons-14/S/Stubhub')

' renders the element
Stubhub('Stubhub', 'Stubhub', 'an optional tech label', 'an optional description')
@enduml
```

