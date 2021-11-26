# AwsWavelength


```text
aws-20210730/Architecture/Compute/AwsWavelength
```

```text
include('aws-20210730/Architecture/Compute/AwsWavelength')
```



| Illustration | AwsWavelength | AwsWavelengthCard | AwsWavelengthGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Compute/AwsWavelength.png) | ![illustration for AwsWavelength](../../../aws-20210730/Architecture/Compute/AwsWavelength.Local.png) | ![illustration for AwsWavelengthCard](../../../aws-20210730/Architecture/Compute/AwsWavelengthCard.Local.png) | ![illustration for AwsWavelengthGroup](../../../aws-20210730/Architecture/Compute/AwsWavelengthGroup.Local.png) |




## AwsWavelength

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWavelength
include('aws-20210730/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelength('AwsWavelength', 'Aws Wavelength', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWavelength
include('aws-20210730/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelength('AwsWavelength', 'Aws Wavelength', 'an optional tech label')
@enduml
```

## AwsWavelengthCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWavelengthCard
include('aws-20210730/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthCard('AwsWavelengthCard', 'Aws Wavelength Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWavelengthCard
include('aws-20210730/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthCard('AwsWavelengthCard', 'Aws Wavelength Card', 'an optional description')
@enduml
```

## AwsWavelengthGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWavelengthGroup
include('aws-20210730/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthGroup('AwsWavelengthGroup', 'Aws Wavelength Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsWavelengthGroup
include('aws-20210730/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthGroup('AwsWavelengthGroup', 'Aws Wavelength Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

