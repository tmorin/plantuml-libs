# Amd


```text
simpleicons-14/A/Amd
```

```text
include('simpleicons-14/A/Amd')
```



| Illustration | Amd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amd.png) | ![illustration for Amd](../../simpleicons-14/A/Amd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmdXs>`
- `<$AmdSm>`
- `<$AmdMd>`
- `<$AmdLg>`





## Amd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amd
include('simpleicons-14/A/Amd')

' renders the element
Amd('Amd', 'Amd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amd
include('simpleicons-14/A/Amd')

' renders the element
Amd('Amd', 'Amd', 'an optional tech label', 'an optional description')
@enduml
```

