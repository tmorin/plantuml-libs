# Packer


```text
simpleicons-14/P/Packer
```

```text
include('simpleicons-14/P/Packer')
```



| Illustration | Packer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Packer.png) | ![illustration for Packer](../../simpleicons-14/P/Packer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PackerXs>`
- `<$PackerSm>`
- `<$PackerMd>`
- `<$PackerLg>`





## Packer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Packer
include('simpleicons-14/P/Packer')

' renders the element
Packer('Packer', 'Packer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Packer
include('simpleicons-14/P/Packer')

' renders the element
Packer('Packer', 'Packer', 'an optional tech label', 'an optional description')
@enduml
```

