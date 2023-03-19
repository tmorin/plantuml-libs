# Masks


```text
material-4/Social/Masks
```

```text
include('material-4/Social/Masks')
```



| Illustration | Masks |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Masks.png) | ![illustration for Masks](../../material-4/Social/Masks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MasksXs>`
- `<$MasksSm>`
- `<$MasksMd>`
- `<$MasksLg>`





## Masks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Masks
include('material-4/Social/Masks')

' renders the element
Masks('Masks', 'Masks', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Masks
include('material-4/Social/Masks')

' renders the element
Masks('Masks', 'Masks', 'an optional tech label', 'an optional description')
@enduml
```

