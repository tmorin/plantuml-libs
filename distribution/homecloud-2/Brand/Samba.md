# Samba


```text
homecloud-2/Brand/Samba
```

```text
include('homecloud-2/Brand/Samba')
```



| Illustration | Samba | SambaCard | SambaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-2/Brand/Samba.png) | ![illustration for Samba](../../homecloud-2/Brand/Samba.Local.png) | ![illustration for SambaCard](../../homecloud-2/Brand/SambaCard.Local.png) | ![illustration for SambaGroup](../../homecloud-2/Brand/SambaGroup.Local.png) |




## Samba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Samba
include('homecloud-2/Brand/Samba')

' renders the element
Samba('Samba', 'Samba', 'an optional tech label', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Samba
include('homecloud-2/Brand/Samba')

' renders the element
Samba('Samba', 'Samba', 'an optional tech label', 'an optional description')
@enduml
```

## SambaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SambaCard
include('homecloud-2/Brand/Samba')

' renders the element
SambaCard('SambaCard', 'Samba Card', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SambaCard
include('homecloud-2/Brand/Samba')

' renders the element
SambaCard('SambaCard', 'Samba Card', 'an optional description')
@enduml
```

## SambaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SambaGroup
include('homecloud-2/Brand/Samba')

' renders the element
SambaGroup('SambaGroup', 'Samba Group', 'an optional tech label') {
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element SambaGroup
include('homecloud-2/Brand/Samba')

' renders the element
SambaGroup('SambaGroup', 'Samba Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

