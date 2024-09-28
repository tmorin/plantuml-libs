# FreeRtos


```text
aws-q2-2024/Architecture/InternetOfThings/FreeRtos
```

```text
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')
```



| Illustration | FreeRtos | FreeRtosCard | FreeRtosGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/InternetOfThings/FreeRtos.png) | ![illustration for FreeRtos](../../../aws-q2-2024/Architecture/InternetOfThings/FreeRtos.Local.png) | ![illustration for FreeRtosCard](../../../aws-q2-2024/Architecture/InternetOfThings/FreeRtosCard.Local.png) | ![illustration for FreeRtosGroup](../../../aws-q2-2024/Architecture/InternetOfThings/FreeRtosGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreeRtosXs>`
- `<$FreeRtosSm>`
- `<$FreeRtosMd>`
- `<$FreeRtosLg>`





## FreeRtos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FreeRtos
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')

' renders the element
FreeRtos('FreeRtos', 'Free Rtos', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FreeRtos
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')

' renders the element
FreeRtos('FreeRtos', 'Free Rtos', 'an optional tech label', 'an optional description')
@enduml
```

## FreeRtosCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FreeRtosCard
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')

' renders the element
FreeRtosCard('FreeRtosCard', 'Free Rtos Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FreeRtosCard
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')

' renders the element
FreeRtosCard('FreeRtosCard', 'Free Rtos Card', 'an optional description')
@enduml
```

## FreeRtosGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FreeRtosGroup
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')

' renders the element
FreeRtosGroup('FreeRtosGroup', 'Free Rtos Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element FreeRtosGroup
include('aws-q2-2024/Architecture/InternetOfThings/FreeRtos')

' renders the element
FreeRtosGroup('FreeRtosGroup', 'Free Rtos Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

