# FileContract


```text
fontawesome-6/Solid/FileContract
```

```text
include('fontawesome-6/Solid/FileContract')
```



| Illustration | FileContract |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileContract.png) | ![illustration for FileContract](../../fontawesome-6/Solid/FileContract.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileContract
include('fontawesome-6/Solid/FileContract')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileContract
include('fontawesome-6/Solid/FileContract')

' renders the element
FileContract('FileContract', 'File Contract', 'an optional tech label', 'an optional description')
@enduml
```

