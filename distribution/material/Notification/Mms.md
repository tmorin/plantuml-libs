# Mms


```text
material/Notification/Mms
```

```text
include('material/Notification/Mms')
```



| Illustration | Mms |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/Mms.png) | ![illustration for Mms](../../material/Notification/Mms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MmsXs>`
- `<$MmsSm>`
- `<$MmsMd>`
- `<$MmsLg>`





## Mms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Mms
include('material/Notification/Mms')

' renders the element
Mms('Mms', 'Mms', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Mms
include('material/Notification/Mms')

' renders the element
Mms('Mms', 'Mms', 'an optional tech label', 'an optional description')
@enduml
```

