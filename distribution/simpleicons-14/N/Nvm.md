# Nvm


```text
simpleicons-14/N/Nvm
```

```text
include('simpleicons-14/N/Nvm')
```



| Illustration | Nvm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nvm.png) | ![illustration for Nvm](../../simpleicons-14/N/Nvm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NvmXs>`
- `<$NvmSm>`
- `<$NvmMd>`
- `<$NvmLg>`





## Nvm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nvm
include('simpleicons-14/N/Nvm')

' renders the element
Nvm('Nvm', 'Nvm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nvm
include('simpleicons-14/N/Nvm')

' renders the element
Nvm('Nvm', 'Nvm', 'an optional tech label', 'an optional description')
@enduml
```

