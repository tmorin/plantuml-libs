# Permissions


```text
gcp/Item/Permissions
```

```text
include('gcp/Item/Permissions')
```



| Illustration | Permissions | PermissionsCard | PermissionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Permissions.png) | ![illustration for Permissions](../../gcp/Item/Permissions.Local.png) | ![illustration for PermissionsCard](../../gcp/Item/PermissionsCard.Local.png) | ![illustration for PermissionsGroup](../../gcp/Item/PermissionsGroup.Local.png) |




## Permissions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Permissions
include('gcp/Item/Permissions')

' renders the element
Permissions('Permissions', 'Permissions', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element Permissions
include('gcp/Item/Permissions')

' renders the element
Permissions('Permissions', 'Permissions', 'an optional tech label', 'an optional description')
@enduml
```

## PermissionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PermissionsCard
include('gcp/Item/Permissions')

' renders the element
PermissionsCard('PermissionsCard', 'Permissions Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element PermissionsCard
include('gcp/Item/Permissions')

' renders the element
PermissionsCard('PermissionsCard', 'Permissions Card', 'an optional description')
@enduml
```

## PermissionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PermissionsGroup
include('gcp/Item/Permissions')

' renders the element
PermissionsGroup('PermissionsGroup', 'Permissions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('gcp/bootstrap')

' loads the Item which embeds the element PermissionsGroup
include('gcp/Item/Permissions')

' renders the element
PermissionsGroup('PermissionsGroup', 'Permissions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

