# ExposurePlus2


```text
material/Image/ExposurePlus2
```

```text
include('material/Image/ExposurePlus2')
```



| Illustration | ExposurePlus2 |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/ExposurePlus2.png) | ![illustration for ExposurePlus2](../../material/Image/ExposurePlus2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExposurePlus2Xs>`
- `<$ExposurePlus2Sm>`
- `<$ExposurePlus2Md>`
- `<$ExposurePlus2Lg>`





## ExposurePlus2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ExposurePlus2
include('material/Image/ExposurePlus2')

' renders the element
ExposurePlus2('ExposurePlus2', 'Exposure Plus2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExposurePlus2
include('material/Image/ExposurePlus2')

' renders the element
ExposurePlus2('ExposurePlus2', 'Exposure Plus2', 'an optional tech label', 'an optional description')
@enduml
```

