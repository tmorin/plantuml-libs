# LaptopFile


```text
fontawesome/Solid/LaptopFile
```

```text
include('fontawesome/Solid/LaptopFile')
```



| Illustration | LaptopFile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LaptopFile.png) | ![illustration for LaptopFile](../../fontawesome/Solid/LaptopFile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopFileXs>`
- `<$LaptopFileSm>`
- `<$LaptopFileMd>`
- `<$LaptopFileLg>`





## LaptopFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaptopFile
include('fontawesome/Solid/LaptopFile')

' renders the element
LaptopFile('LaptopFile', 'Laptop File', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaptopFile
include('fontawesome/Solid/LaptopFile')

' renders the element
LaptopFile('LaptopFile', 'Laptop File', 'an optional tech label', 'an optional description')
@enduml
```

