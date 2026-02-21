# FileCsv


```text
fontawesome/Solid/FileCsv
```

```text
include('fontawesome/Solid/FileCsv')
```



| Illustration | FileCsv |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileCsv.png) | ![illustration for FileCsv](../../fontawesome/Solid/FileCsv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCsvXs>`
- `<$FileCsvSm>`
- `<$FileCsvMd>`
- `<$FileCsvLg>`





## FileCsv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileCsv
include('fontawesome/Solid/FileCsv')

' renders the element
FileCsv('FileCsv', 'File Csv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCsv
include('fontawesome/Solid/FileCsv')

' renders the element
FileCsv('FileCsv', 'File Csv', 'an optional tech label', 'an optional description')
@enduml
```

