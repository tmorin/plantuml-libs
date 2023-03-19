# Grubhub


```text
simpleicons-8/G/Grubhub
```

```text
include('simpleicons-8/G/Grubhub')
```



| Illustration | Grubhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Grubhub.png) | ![illustration for Grubhub](../../simpleicons-8/G/Grubhub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrubhubXs>`
- `<$GrubhubSm>`
- `<$GrubhubMd>`
- `<$GrubhubLg>`





## Grubhub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Grubhub
include('simpleicons-8/G/Grubhub')

' renders the element
Grubhub('Grubhub', 'Grubhub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grubhub
include('simpleicons-8/G/Grubhub')

' renders the element
Grubhub('Grubhub', 'Grubhub', 'an optional tech label', 'an optional description')
@enduml
```

