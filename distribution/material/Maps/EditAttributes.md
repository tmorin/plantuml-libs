# EditAttributes


```text
material/Maps/EditAttributes
```

```text
include('material/Maps/EditAttributes')
```



| Illustration | EditAttributes |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/EditAttributes.png) | ![illustration for EditAttributes](../../material/Maps/EditAttributes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EditAttributesXs>`
- `<$EditAttributesSm>`
- `<$EditAttributesMd>`
- `<$EditAttributesLg>`





## EditAttributes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element EditAttributes
include('material/Maps/EditAttributes')

' renders the element
EditAttributes('EditAttributes', 'Edit Attributes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EditAttributes
include('material/Maps/EditAttributes')

' renders the element
EditAttributes('EditAttributes', 'Edit Attributes', 'an optional tech label', 'an optional description')
@enduml
```

