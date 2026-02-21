# FileContract


```text
fontawesome/Solid/FileContract
```

```text
include('fontawesome/Solid/FileContract')
```



| Illustration | FileContract |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileContract.png) | ![illustration for FileContract](../../fontawesome/Solid/FileContract.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileContractXs>`
- `<$FileContractSm>`
- `<$FileContractMd>`
- `<$FileContractLg>`





## FileContract

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileContract
include('fontawesome/Solid/FileContract')

' renders the element
FileContract('FileContract', 'File Contract', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileContract
include('fontawesome/Solid/FileContract')

' renders the element
FileContract('FileContract', 'File Contract', 'an optional tech label', 'an optional description')
@enduml
```

